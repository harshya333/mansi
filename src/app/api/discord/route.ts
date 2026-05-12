import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    console.log('📨 Discord API called');
    
    const { answer, emoji } = await request.json();
    console.log('📦 Received data:', { answer, emoji });

    const WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;
    console.log('🔗 Webhook URL exists?', !!WEBHOOK_URL);

    if (!WEBHOOK_URL) {
      console.error('❌ Discord webhook not configured in .env');
      return NextResponse.json(
        { error: "Discord webhook not configured" },
        { status: 500 }
      );
    }

    console.log('📤 Sending to Discord webhook...');
    
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: `**${answer}** ${emoji}`,
        embeds: [
          {
            title: "💕 Proposal Response",
            description:
              answer === "YES ✅"
                ? "Mansi ne HA bolun diya! 🎉💕"
                : "Mansi ne NA bolun diya! 😢",
            color: answer === "YES ✅" ? 65280 : 16711680,
            fields: [
              {
                name: "Answer",
                value: answer,
                inline: true,
              },
              {
                name: "Time",
                value: new Date().toLocaleString(),
                inline: true,
              },
            ],
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });

    console.log('📊 Discord response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Discord API error:', response.status, errorText);
      return NextResponse.json(
        { error: "Failed to send Discord notification", details: errorText, status: response.status },
        { status: response.status }
      );
    }

    console.log('✅ Discord notification sent successfully!');
    return NextResponse.json({
      success: true,
      message: "Discord notification sent",
    });
  } catch (error) {
    console.error('💥 Discord endpoint error:', error);
    return NextResponse.json(
      { error: "Failed to process request", details: String(error) },
      { status: 500 }
    );
  }
}

// Test endpoint
export async function GET() {
  const WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;
  return NextResponse.json({
    webhook_configured: !!WEBHOOK_URL,
    webhook_url: WEBHOOK_URL ? '✅ Configured' : '❌ Not configured',
    env_vars: Object.keys(process.env).filter(key => key.includes('DISCORD')),
  });
}
