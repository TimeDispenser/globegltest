const globe = Globe()(document.getElementById('globeViz'))
  .globeImageUrl('https://i.postimg.cc/Mpw0s72p/earth-blue-marble.jpg') // Replace with your map image URL
  .backgroundImageUrl('https://i.postimg.cc/MptBdgm9/earth-topology.png')
  .showGraticules(true);

// Remove loading indicator once the globe is ready
globe.onGlobeReady(() => {
  document.getElementById('loading-indicator').style.display = 'none';
});

globe.onGlobeClick(coords => {
  const tooltip = document.getElementById('tooltip');
  tooltip.style.display = 'block';
  tooltip.style.left = event.clientX + 10 + 'px';
  tooltip.style.top = event.clientY + 10 + 'px';
  tooltip.textContent = `Latitude: ${coords.lat.toFixed(4)}, Longitude: ${coords.lng.toFixed(4)}`; //Show 4 decimals
});

globe.onGlobeHover(coords => {
  if (!coords) {
    document.getElementById('tooltip').style.display = 'none'; // Hide tooltip when not hovering
  }
});

// Optional: Rotate the globe
(function rotateGlobe() {
  globe.rotation().y += 0.1;
  requestAnimationFrame(rotateGlobe);
})();
