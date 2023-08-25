
export const Square = ({ children, updateBoard, isSelected, index }) => {

    const handleClick = () => {
  
      updateBoard(index)
    }
  
    const className = `square ${isSelected ? 'is-selected' : ''}`// i aqui como es true le agrega la etiqueta y en el css le agrega el estilo 
    return (
      <div className={className} onClick={handleClick}>
        {children}
      </div>
    )
  }