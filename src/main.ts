import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="min-h-screen flex flex-col items-center justfiy-start mt-16 space-y-6">
    <img
      src="https://avatars.githubusercontent.com/u/49092528"
      class="w-32 h-32 rounded-full object-cover"
      alt="avatar"
    />
    <h1 class="text-4xl font-bold"> Hello, Hasan here! </h1>
    
    <h2 class="text-2xl font-bold"> 
     🚧 This is an under-construction site, see you soon
    </h2>

    <div class="flex flex-col items-center space-y-3 mt-4">

  <p class="text-gray-600 text-sm">
    If you're here, don't forget to follow me:
  </p>

  <a
    href="https://github.com/YOUR_USERNAME"
    target="_blank"
    class="w-64 flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-900 text-white shadow-sm hover:bg-gray-800 transition"
  >
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 ...Z"/>
    </svg>
    <span class="font-medium">Follow me on GitHub</span>
  </a>

  <a
    href="https://linkedin.com/in/YOUR_USERNAME"
    target="_blank"
    class="w-64 flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-600 text-white shadow-sm hover:bg-blue-500 transition"
  >
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.98 3.5A2.5 2.5 ...Z"/>
    </svg>
    <span class="font-medium">Follow me on LinkedIn</span>
  </a>

</div>


  </div>

`

