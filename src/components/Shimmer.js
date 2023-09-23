const Shimmer = () =>{
    return (
      <div className="flex flex-wrap justify-center">
        {Array(20)
          .fill("")
          .map((_, index) => (
            <div key = {index} class="border border-blue-300 shadow rounded-md m-1 h-72 w-64 p-3">
              <div class="animate-pulse">
                <div class="rounded-md bg-slate-700 h-24 w-24"></div>
                <div class="flex-1 space-y-6 py-1">
                  <div class="h-2 bg-slate-700 rounded"></div>
                  <div class="space-y-3">
                    <div class="grid grid-cols-3 gap-4">
                      <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                      <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                    </div>
                    <div class="h-2 bg-slate-700 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
}

export default Shimmer;