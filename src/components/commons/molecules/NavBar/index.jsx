import BoxProfile from "../../atoms/BoxProfile";
import SearchInput from "../../atoms/SearchInput";

const Navbar = () => {
  return (
    <>
      <header className="absolute top-4 right-4 z-50 mt-2 flex h-12 w-[--my-width-nav] items-center justify-between bg-transparent px-4">
        {/* Left Section */}
        <section className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-6 rounded-full bg-[--bg-primary-cray]">
            <p className="font-barlow ml-3 text-sm font-semibold text-[--text-color-black]">
              Menu
            </p>
            <button
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[--bg-secondary-cray] opacity-85 hover:opacity-100"
              onClick={() => {
                // Add menu toggle logic here
              }}
            >
              <i className="fa-solid fa-bars text-[--text-color-black]"></i>
            </button>
          </div>
        </section>

        {/* Right Section (Search + Profile) */}
        <section className="flex items-center justify-between gap-2 max-md:hidden">
          <SearchInput
            value={""} 
            onChange={() => {}}
            onSearch={() => {}}
          />
          <BoxProfile
            name="Test"
            onClick={() => console.log("profile")}
            picture={""}
          />
        </section>
      </header>
    </>
  );
};

export default Navbar;