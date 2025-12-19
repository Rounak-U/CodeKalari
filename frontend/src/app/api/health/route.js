import { NextResponse } from 'next/server';

// Simple health check endpoint for monitoring / cron jobs.
// GET /api/health
export async function GET() {
  try {
    const timestamp = new Date().toISOString();
    const uptime = typeof process?.uptime === 'function' ? Math.round(process.uptime()) : null;
    const memory = typeof process?.memoryUsage === 'function' ? process.memoryUsage().rss : null;

    return NextResponse.json(
      {
        status: 'ok',
        timestamp,
        uptime_seconds: uptime,
        memory_rss_bytes: memory,
        env: process.env.NODE_ENV || 'unknown',
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { status: 'error', message: String(err) },
      { status: 500 }
    );
  }
}
