import './App.css';
// document.querySelector("a-marker").addEventListener("markerFound", () => {
//   alert("found")
// })
function App() {
  return (
    <div className="App">
      <div className='ar-container'>
      <a-scene embedded vr-mode-ui="enabled: false;" arjs="trackingMethod: best; debugUIEnabled: false;" renderer="antialias: false; logarithmicDepthBuffer:true">
      <a-assets>
        <a-asset-item id="icm" src="./models/bowl.glb"/>
      </a-assets>
      <a-marker preset="hiro">
        {/* <!-- <a-entity gltf-model="https://arjs-cors-proxy.herokuapp.com/https://tests.offtopicproductions.com/ywca.gltf"></a-entity> --> */}
        <a-entity gltf-model="#icm" position="0 0.5 0" scale="0.5 0.5 0.5" rotate="-90 -90 60"></a-entity>
        {/* <!-- <a-box position="0 0.5 0" material="color: red;"></a-box> --> */}
      </a-marker>
      
      <a-entity camera></a-entity>
      {/* <!-- <img src="./hiro_marker.png"> --> */}
      </a-scene>
      </div>
      <div className='camera-overlay'>
        <img src='./media/foodsee_logo.png'/>
        https://844d-2409-4073-4e0b-63b2-f6dd-4b84-3fa8-30bd.ngrok-free.app
      </div>
      <br/>
         
    </div>
    
    
  );
}

export default App;
