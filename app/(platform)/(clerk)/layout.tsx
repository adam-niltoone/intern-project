const ClerkLayout = ({ children }: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full pt-32 flex items-center justify-center">
      {children}
    </div>
  );
};

export default ClerkLayout;