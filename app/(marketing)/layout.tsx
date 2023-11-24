const MarketingLayout = (
    { children }: { children: React.ReactNode }
) => {
    return (
        <div>
            <nav className="bg-gray-800 flex items-center">
                <p className="text-white">
                    Navigation Bar
                </p>
            </nav>
            <main>
                {children}
            </main>
            <div>Insert Footer Here!</div>
        </div>
    )
}

export default MarketingLayout;