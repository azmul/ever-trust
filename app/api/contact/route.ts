import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "../../data/site";
import { getDb } from "../../db";
import { inquiries } from "../../db/schema";

type ContactPayload = {
  name?: string;
  phone?: string;
  product?: string;
  quantity?: string;
  details?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const product = body.product?.trim() ?? "";
  const quantity = body.quantity?.trim() ?? "";
  const details = body.details?.trim() ?? "";

  // Server-side validation mirrors the client checks.
  if (!name || phone.length < 6 || !product) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 422 }
    );
  }

  let saved = false;
  let emailed = false;

  // 1) Persist the lead so it shows up in the admin panel.
  const db = getDb();
  if (db) {
    try {
      await db.insert(inquiries).values({ name, phone, product, quantity, details });
      saved = true;
    } catch (err) {
      console.error("Contact: failed to save inquiry —", err);
    }
  }

  // 2) Send the notification email (if Resend is configured).
  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const resend = new Resend(apiKey);
    const from = process.env.CONTACT_FROM_EMAIL ?? "Ever Trust <onboarding@resend.dev>";
    const html = `
      <h2>New import inquiry — ${site.name}</h2>
      <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif">
        <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>
        <tr><td><strong>Product</strong></td><td>${escapeHtml(product)}</td></tr>
        <tr><td><strong>Quantity</strong></td><td>${escapeHtml(quantity || "—")}</td></tr>
        <tr><td valign="top"><strong>Details</strong></td><td>${
          escapeHtml(details || "—").replace(/\n/g, "<br/>")
        }</td></tr>
      </table>
    `;
    try {
      const { error } = await resend.emails.send({
        from,
        to: site.email,
        subject: `Import inquiry: ${product} — ${name}`,
        html,
      });
      if (error) console.error("Resend error:", error);
      else emailed = true;
    } catch (err) {
      console.error("Contact: email send failed —", err);
    }
  }

  // Succeed if the lead reached us through at least one channel.
  if (!saved && !emailed) {
    return NextResponse.json(
      { ok: false, error: "Inquiry could not be delivered. Please use WhatsApp." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
