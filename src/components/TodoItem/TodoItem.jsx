import Button from "../Button/Button";

export default function TodoItem({ todo }) {
    return (
        <ul className="w-full mt-8">
          <li className="flex justify-between items-center border-b border-gray-300 py-2">
            <p className="text-lg">Buy groceries</p>
            <div className="flex gap-4">
              <Button>EDIT</Button>
              <Button>DELETE</Button>
            </div>
          </li>
        </ul>
    );
}