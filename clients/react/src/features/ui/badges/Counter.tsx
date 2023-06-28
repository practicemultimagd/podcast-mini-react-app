export const Counter = ({num = 0}) => (
    <div className="p-2">
      <p className="flex h-2 w-2 items-center justify-center rounded-lg bg-indigo-500 p-3 text-xs text-white">
        {num}
      </p>
    </div>
);
