const svgNode = document.querySelector('svg');
const fePointLightNode = svgNode.querySelector('fePointLight');
svgNode.addEventListener('mousemove', handleMove);
svgNode.addEventListener('touchmove', handleMove);
function handleMove(event) {
  fePointLightNode.setAttribute('x', event.clientX);
  fePointLightNode.setAttribute('y', event.clientY);
}
