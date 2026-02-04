 # Property Management Dashboard      
        
Premium 2026-ready single-page property management dashboard built with Next.js (App Router + React Server Components) and Tailwind CSS v4. Includes 3D property visualizations, dynamic lighting, AI insights, real-time placeholders, and a glassmorphic pastel-futuristic UI.  
   
## Features  
- Glassmorphism + pastel futuristic gradients, animated noise, parallax backgrou nd      
- 3D property cards and city overview (React Three Fiber)  
- AI insights banner, live notifications, sortable transactions      
- Maintenance scheduler, tenant profiles modal, maps widget
- Light/dark theme toggle + high-contrast mode      

## Getting Started 
```bash
npm install 
npm run dev  
```

Open `http://localhost:3000` (or the port printed in the terminal).
 
## Tech Stack
- Next.js 15 (App Router, RSC)
- React 19
- Tailwind CSS v4
- @react-three/fiber / drei / three
- Framer Motion + framer-motion-3d
- Recharts, lucide-react, react-big-calendar, react-leaflet

## Notes
- Devtools segment explorer is disabled to avoid runtime hook errors in some setups.
- Map widget uses Leaflet and guards against double initialization.
