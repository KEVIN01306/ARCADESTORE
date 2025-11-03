
export const formatDate = (dateString: string | undefined) => {
    if (!dateString) return "No disponible";
    return new Date(dateString).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
};