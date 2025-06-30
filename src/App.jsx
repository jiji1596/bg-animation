import { StickmanShoot }from "./components/StickmanShoot";

function App() {
  return (
    <div className="min-h-[200vh] bg-gradient-to-b from-white to-gray-100">
      <div className="bg-red-500 text-white p-4">Hello Tailwind</div>
      {/* Intro Section */}
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Scroll down to shoot the ball 🏀</h1>
      </section>

      {/* Stickman Animation */}
      <section className="min-h-screen flex items-center justify-center bg-blue-50">
        <StickmanShoot />
      </section>

      {/* Bottom Spacer or Basket */}
      <section className="h-[500px] bg-orange-50 flex items-center justify-center">
        <div className="text-xl">🎯 The basket is here!</div>
      </section>
    </div>
  );
}

export default App;
