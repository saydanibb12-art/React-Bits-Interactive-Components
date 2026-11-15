import './App.css'
import ChromaGrid from './component/ChromaGrid'

const items = [
  const photoItems = [
  {
    image: "/photos/photo1.jpg",
    title: "Cherry Blossom",
    subtitle: "Beautiful Flowers",
  },
  {
    image: "/photos/photo2.jpg",
    title: "Red cherry",
    subtitle: "tasty ",
  },
  {
    image: "/photos/photo3.jpg",
    title: "Garden",
    subtitle: "Beautiful Garden",
  },
  {
    image: "/photos/photo4.jpg",
    title: "Flowers",
    subtitle: "Colorful Flowers",
  },
  {
    image: "/photos/photo5.jpg",
    title: "Landscape",
    subtitle: "Amazing Views",
  },
  {
    image: "/photos/photo6.jpg",
    title: "Beauty",
    subtitle: "Natural Beauty",
  },
];
function App() {

  return (
    <>
      
<ChromaGrid items={items} columns={3} radius={260}
    reveal="spotlight"
    minCardWidth={180}
    gap={12}
    aspectRatio="3 / 2"
    cardRadius={22}
    showInfo
    frame={false}
    softness={0.6}
    damping={0.45}
    fadeOut={0.6}
    grayscale={1}
    dim={0.12}
    glow={0.5}
    borderGlow={1}
/>
    </>
  )
}

export default App