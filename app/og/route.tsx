import { ImageResponse } from 'next/og';

// Brand OG card (1200x630) in the design-system colors, from the ISO logo mark.
// Served at /og and referenced explicitly from page metadata so it attaches
// reliably across the (en)/(fr) route groups.
export const runtime = 'edge';

export async function GET() {
  const [semibold, regular] = await Promise.all([
    fetch(new URL('./Geist-SemiBold.ttf', import.meta.url)).then((r) => r.arrayBuffer()),
    fetch(new URL('./Geist-Regular.ttf', import.meta.url)).then((r) => r.arrayBuffer()),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A0A0E',
          fontFamily: 'Geist',
        }}
      >
        {/* ISO monogram (cream) */}
        <svg width="120" height="120" viewBox="0 0 512 512">
          <g transform="translate(95.815 138.627)">
            <path
              d="M134.523,236.413h-65.6V52.278H0V0H217.071L198.907,52.278H134.523v91.448l-21,1.077c0,.068-.439,7.489,1.943,19.766a145.309,145.309,0,0,0,6.149,21.935,175.59,175.59,0,0,0,12.907,27.506v22.4Z"
              fill="#F0EDE7"
            />
            <path
              d="M112,76.693q-46.837,0-72.644-21.825T11-4.235L73.13-7.1Q75.679,9.465,85.078,18.546t27.56,9.081q14.338,0,22.144-4.939t7.806-14.816A19.034,19.034,0,0,0,139.561-2.8q-3.027-4.62-11.789-8.284t-25.967-7.169Q70.9-24.627,51.783-33.07T23.9-54.9q-8.762-13.382-8.762-34.092,0-21.029,10.833-36.959T57.2-150.8q20.391-8.921,49.067-8.921,30.269,0,50.66,10.2t31.7,28.038q11.311,17.843,13.541,41.42l-61.493,2.549q-1.274-15.612-10.355-24.374t-24.693-8.762q-13.382,0-20.71,5.416A16.979,16.979,0,0,0,77.591-90.9q0,10.514,8.443,16.09t30.428,9.4q33.455,5.735,52.89,15.612t27.56,23.578q8.125,13.7,8.125,31.543,0,33.136-24.533,52.253T112,76.693Z"
              transform="translate(114.152 159.72)"
              fill="#F0EDE7"
            />
          </g>
        </svg>

        {/* Wordmark. Single text node so kerning stays tight, all cream. */}
        <div
          style={{
            marginTop: 44,
            fontSize: 78,
            fontWeight: 600,
            letterSpacing: '-0.04em',
            color: '#F0EDE7',
          }}
        >
          TravelSkills.io
        </div>

        {/* Gold accent */}
        <div style={{ width: 64, height: 3, backgroundColor: '#D0B982', marginTop: 34, marginBottom: 34 }} />

        {/* Baseline */}
        <div style={{ fontSize: 30, fontWeight: 400, color: '#9CA3AF', maxWidth: 820, textAlign: 'center' }}>
          Open-source Claude Agent Skills for travel professionals
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Geist', data: semibold, weight: 600, style: 'normal' },
        { name: 'Geist', data: regular, weight: 400, style: 'normal' },
      ],
    },
  );
}
