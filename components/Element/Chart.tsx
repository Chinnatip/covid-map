type Props = {
  title: string
  canvas_id: string
  icon?: string
}

const Chart = ({ title = '', canvas_id = '', icon = '' }: Props) => {
  return (
    <div className="w-full lg:w-1/2 pr-0 lg:pr-2  ">
      <p className="text-xl pb-3 flex items-center">
        <i className={`fas mr-3 ${icon} `} /> {title}
      </p>
      <div className="p-6 bg-white">
        <canvas id={canvas_id} width="400" height="200"></canvas>
      </div>
    </div>
  )
}

export default Chart
