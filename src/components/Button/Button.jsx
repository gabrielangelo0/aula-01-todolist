export default function Button({ children }) {
    return (
        <button className="px-3 bg-[#6c63ff] text-white rounded">
            {children}
        </button>
    );
}