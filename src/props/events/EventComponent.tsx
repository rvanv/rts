const EventComponent: React.FC = () => {

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    
  }

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('im being dragged', event.movementX, event.movementY, event.screenX, event.screenY);
    
  }

  return (
    <div>
      <input onChange={onChange}/>
      <div draggable onDragStart={onDragStart}>Drag me!</div>
    </div>
  )
};

export default EventComponent;