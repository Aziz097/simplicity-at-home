import { ImageResponse } from 'next/og';
import { SITE_CONFIG } from '@/constants';

export const runtime = 'edge';
export const alt = SITE_CONFIG.shortName;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #F4F1E8 0%, #E8DCC4 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Decorative Elements */}
        <div
          style={{
            position: 'absolute',
            top: 40,
            right: 40,
            width: 120,
            height: 120,
            borderRadius: '50%',
            background: 'rgba(205, 180, 150, 0.3)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            left: 60,
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'rgba(205, 180, 150, 0.2)',
            display: 'flex',
          }}
        />

        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
            textAlign: 'center',
            maxWidth: '900px',
          }}
        >
          {/* Title */}
          <h1
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: '#1B263B',
              margin: 0,
              marginBottom: 24,
              lineHeight: 1.1,
            }}
          >
            Simplicity at Home
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 32,
              color: '#415A77',
              margin: 0,
              marginBottom: 32,
              lineHeight: 1.4,
            }}
          >
            Japanese Rituals, Recipes & Arrangements
          </p>

          {/* Description */}
          <p
            style={{
              fontSize: 24,
              color: '#778DA9',
              margin: 0,
              lineHeight: 1.5,
              maxWidth: '700px',
            }}
          >
            Discover timeless Japanese practices to cultivate calm in your everyday life
          </p>

          {/* Author */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: 48,
              fontSize: 20,
              color: '#415A77',
            }}
          >
            <span style={{ fontWeight: 600 }}>By Yumiko Sekine</span>
            <span style={{ margin: '0 12px', color: '#CDB496' }}>•</span>
            <span>Founder of Fog Linen Work</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
