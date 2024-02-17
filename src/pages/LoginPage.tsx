import React from "react";

interface LoginPageProps {

}

export function LoginPage(props: LoginPageProps) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <button
        className="px-4 py-2 bg-cyan-400 rounded-xl"
        onClick={() => {
          window.location.href = '/mytasks'
        }}
      >
        Push me
      </button>
    </div>
  )
};