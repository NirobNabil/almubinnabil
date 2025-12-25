export function ImageDescription({description}: {description?: string}) {
    return (
        <p className="text-sm text-gray-500 mt-4">figure: {description || ""}</p>
    )
}