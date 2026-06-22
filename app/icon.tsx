import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#84cc16', // lime-500
          fontWeight: 900,
          borderRadius: '25%',
          fontFamily: 'monospace',
        }}
      >
        P
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}
