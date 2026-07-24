/**
 * Simplified Iowa state outline used as a subtle backdrop behind the logo
 * in the About section (matches the mockup's center column).
 */
export default function IowaOutline({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <svg
        viewBox="0 0 100 62"
        width="100%"
        fill="none"
        stroke="rgba(254, 126, 2, 0.25)"
        strokeWidth={1.5}
        strokeLinejoin="round"
        aria-hidden="true"
        style={{ display: "block" }}
      >
        <path d="M6 6l2-3 84 1 1 5 4 6-2 5 3 4-1 6-4 3-2 5 1 4-4 3-1 6-3 3 1 4-11 1-63-1-2-6 1-5-3-6 1-4-3-5 2-5-2-6 2-5-2-6z" />
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
}
