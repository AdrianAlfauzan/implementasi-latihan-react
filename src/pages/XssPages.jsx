import { useState } from "react";

export default function XSSDemo() {
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <h2 className="text-3xl font-bold underline mb-10">Simulasi XSS di Next.js</h2>
      <input
        className="font-bold  p-3 rounded-lg"
        type="text"
        placeholder="Masukkan sesuatu..."
        onChange={(e) => {
          console.log("User Input:", e.target.value);
          setInput(e.target.value);
        }}
      />
      <p className="font-bold">Hasil tanpa sanitasi:</p>
      <div dangerouslySetInnerHTML={{ __html: input }} />

      <hr />

      <p>
        {/* Contoh : 1. <img src="x" onerror="alert('XSS Berhasil!');" /> */}
        {/* Contoh : 2. <script>alert('XSS Berhasil!');</script> */}
        {/* <img src="x" onerror="document.write('<h1>XSS!</h1>'); console.log('XSS Terjadi!');" /> */}
      </p>
    </div>
  );
}
