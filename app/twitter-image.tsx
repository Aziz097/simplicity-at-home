import { ImageResponse } from 'next/og';
import { SITE_CONFIG } from '@/constants';

export const runtime = 'edge';
export const alt = SITE_CONFIG.shortName;
export const size = {
  width: 1200,
  height: 600,
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
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: '#1B263B',
              margin: 0,
              marginBottom: 20,
            }}
          >
            Simplicity at Home
          </h1>
          <p
            style={{
              fontSize: 28,
              color: '#415A77',
              margin: 0,
              marginBottom: 24,
            }}
          >
            Japanese Rituals, Recipes & Arrangements
          </p>
          <p
            style={{
              fontSize: 20,
              color: '#778DA9',
              margin: 0,
            }}
          >
            By Yumiko Sekine
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
