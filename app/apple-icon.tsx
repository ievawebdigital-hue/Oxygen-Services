import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 72,
          background: 'linear-gradient(135deg, #0B1F33 0%, #153252 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          borderRadius: 36,
          border: '4px solid #1677FF',
        }}
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#19C6D9"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20M2 12h20" stroke="#1677FF" strokeWidth="2.5" />
          <circle cx="12" cy="12" r="5" fill="#0B1F33" stroke="#19C6D9" strokeWidth="2" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
