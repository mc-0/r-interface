export default function StarryBackground() {
    return (
        <div className="starry-background">
            <div className="glow"></div>
            {Array.from({ length: 80 }).map((_, i) => (
                <div
                    key={i}
                    className="star"
                    style={{
                        animationDelay: `${Math.random() * 10}s`,
                        top: `${Math.random() * 100}vh`,
                        left: `${Math.random() * 100}vw`,
                    }}
                />
            ))}
        </div>
    );
}