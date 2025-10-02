import { motion } from "framer-motion";

export default function PreRelease() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 py-20">
      {/* Gradient text box */}
      <motion.div
        className="max-w-3xl w-full rounded-[2rem] bg-gradient-to-r from-purple-600 to-indigo-600 shadow-xl p-10 text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Join the Pre-Release
        </h1>
        <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
          Be the first to experience <span className="font-semibold">Rent It</span>. 
          Sign up below and we’ll notify you before launch.
        </p>
        <p className="text-sm text-white/70">
          Your details are safe with us. We’ll only use this to notify you about
          the Rent It launch.
        </p>
      </motion.div>

      {/* Form embed below */}
      <motion.div
        className="w-full max-w-3xl bg-white rounded-2xl shadow-lg overflow-hidden mt-12 p-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdgpsKTtNwNTILftEauXJDcecsUK7dNTlAeyXp4_qTirF2Okg/viewform?embedded=true"
          width="100%"
          height="800"
          className="w-full h-[800px] rounded-xl"
        >
          Loading…
        </iframe>
      </motion.div>
    </div>
  );
}
