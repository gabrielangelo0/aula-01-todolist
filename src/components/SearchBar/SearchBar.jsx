import { MagnifyingGlass } from "phosphor-react";

export default function SearchBar({ setTodo }) {
    return(
        <div className="flex border border-[#6c63ff] items-center flex-1 rounded p-1">
            <input
                placeholder="Search note..."
                className="px-4 py-3 flex-1 outline-none"
                type="text"
                onChange={(e) => setTodo(e.target.value)}
            />
            <MagnifyingGlass size={32} />
          </div>
    );
}
