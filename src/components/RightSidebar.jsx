export const RightSidebar = () => {
    return <div className="w-80 bg-[#181717] fixed top-0 right-0 h-full py-2">
    <div className="space-y-2">
      {/* Badges Card */}
      <div className="w-full bg-[#181717] rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Badges</h3>
        <div className="bg-[#272727] rounded-lg h-40"></div>
      </div>

      {/* Company Specific Card */}
      <div className="w-full bg-[#181717] rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Company Specific</h3>
        <div className="space-y-4">
          {["Amazon", "Google", "Blackrock"].map((company) => (
            <div
              key={company}
              className="bg-[#272727] rounded-lg px-4 py-2 text-center"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
}