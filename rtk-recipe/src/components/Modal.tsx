import { type Recipe } from "../types/recipe.type"

type ModalProps = {
  recipe: Recipe
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  show: boolean
}

const Modal = ({ recipe, setShow, show }: ModalProps) => {
  return (
    <div
      className={`modal ${show ? "d-block" : "d-none"}`}
      style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
      onClick={() => {
        setShow(false)
      }}
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        onClick={e => {
          e.stopPropagation()
        }}
      >
        <div className="modal-content"></div>
        <div className="modal-header">
          <h5 className="modal-title">{recipe.label}</h5>
          <h5 className="modal-title">{recipe.calories}Kcal</h5>
        </div>
      </div>
    </div>
  )
}

export default Modal
