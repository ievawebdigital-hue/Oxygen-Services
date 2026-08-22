import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: '#0B1F33',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#19C6D9',
          borderRadius: 8,
          fontWeight: 900,
          border: '1.5px solid #1677FF',
          boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#19C6D9"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Medical Oxygen cross & molecule path */}
          <path d="M12 2v20M2 12h20" stroke="#1677FF" strokeWidth="2.5" />
          <circle cx="12" cy="12" r="4.5" fill="#0B1F33" stroke="#19C6D9" strokeWidth="2" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
