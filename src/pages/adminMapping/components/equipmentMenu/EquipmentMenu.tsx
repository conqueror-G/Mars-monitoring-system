import { observer } from 'mobx-react'

import equipmentOptionData from '../../data/equipmentFilterOption'

const EquipmentMenu = observer(() => {
  return (
    <>
      <h2 className="mb-2 text-2xl font-semibold text-black">{equipmentOptionData[0].title}</h2>
      <div className="mb-8 flex w-full flex-col rounded border border-textDisabled bg-bgPaper py-4 px-12">
        <div className="mb-4 flex flex-wrap justify-center gap-4">
          {equipmentOptionData.map((data: any, idx: number) => (
            <div key={idx}>
              <h3 className="mb-1 block text-sm font-semibold text-gray-900 dark:text-gray-400">
                {data.name}
              </h3>
              <select className="block w-36 rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500">
                {data.option.map((el: any, idx: number) => (
                  <option value={el.queryTitle} key={idx}>
                    {el.optionTitle}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="mr-12 rounded-lg border-2 border-primary px-[4rem]  py-1 text-primary">
            Reset
          </button>
          <button className="rounded-lg border-2 bg-primary px-[4rem] py-1 text-white">
            Search
          </button>
        </div>
      </div>
    </>
  )
})

export default EquipmentMenu
