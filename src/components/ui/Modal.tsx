export default function Modal({ children, isOpen, onClose }: { children: React.ReactNode; isOpen: boolean; onClose: () => void }) {
    if (!isOpen) return null;
    return (
        <div className="modal">
            <div className="modal-content">
                <button onClick={onClose}>Cerrar</button>
                {children}
            </div>
        </div>
    );
}
