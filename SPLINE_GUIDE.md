# Spline 3D Integration Guide

This portfolio is set up to use Spline 3D scenes for stunning interactive 3D elements.

## Quick Start

1. **Create a Spline Scene**
   - Go to [spline.design](https://spline.design)
   - Create a new scene or use a template
   - Design your 3D element

2. **Export the Scene**
   - Click "Export" → "Code" → "React"
   - Copy the scene URL (e.g., `https://prod.spline.design/xxxxx/scene.splinecode`)

3. **Add to Your Page**
   ```jsx
   import SplineScene from "@/app/components/SplineScene";
   
   // In your component:
   <SplineScene 
     scene="https://prod.spline.design/your-scene-url/scene.splinecode"
     className="w-full h-[600px]"
   />
   ```

## Example Usage

### Home Page Hero
Replace the image section with a Spline scene:
```jsx
<SplineScene 
  scene="https://prod.spline.design/your-hero-scene/scene.splinecode"
  className="w-full md:w-1/2 h-screen"
/>
```

### DevSecOps Visualization
Add a 3D security shield or pipeline visualization:
```jsx
<SplineScene 
  scene="https://prod.spline.design/your-devsecops-scene/scene.splinecode"
  className="w-full h-[500px] rounded-2xl"
/>
```

## Tips

- Keep scenes optimized (under 5MB for best performance)
- Use simple geometries for better performance
- Test on mobile devices
- Consider using loading states for large scenes

## Performance

The `SplineScene` component includes:
- Lazy loading
- Suspense boundaries
- Loading states
- Error handling

Enjoy creating stunning 3D experiences! 🚀


