import { toJS } from 'mobx'

import useStore from '../../../useStore'

const EquipmentInfo = ({ equipmen1t }) => {
  const { detailDatas } = useStore()
  const { equipment } = detailDatas.equipment

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-400">General Information</h1>
      <ul className=" mb-10 grid w-full grid-cols-5 border-b border-zinc-200 pt-5 pb-10">
        {Title_Data.GeneralTitle.map((data, idx) => {
          const keyData = Object.keys(data)[0]
          const valueData = equipment[keyData]
          const title = data[keyData]
          const value = typeof valueData === 'object' ? valueData.name : valueData

          return (
            <li key={idx}>
              <p className="mb-2 font-extrabold">{title}</p>
              {value}
            </li>
          )
        })}
        {
          <li>
            <p className="mb-2 font-extrabold ">
              capacity <span className="px-2">/</span> unit
            </p>
            <p>
              <span className="mr-11 ml-4">{equipment.capacity}</span>
              <span>{equipment.unit.name}</span>
            </p>
          </li>
        }
      </ul>
      {/* 유지보수 */}
      <h1 className="mt-4 text-2xl font-semibold text-gray-400">Maintanance</h1>
      <ul className=" mb-10 grid w-full grid-cols-5 border-b border-zinc-200 pt-5 pb-10">
        {Title_Data.MaintananceTitle.map((obj, idx) => {
          const keyData = Object.keys(obj)[0]
          const valueData = obj[keyData]
          const value = equipment[keyData]
          // console.log(equipment[keyData])

          return (
            <li key={idx}>
              <p className="mb-2 font-extrabold">{valueData}</p>
              <p>{value}</p>
            </li>
          )
        })}
      </ul>

      {/* 디바이스 */}
      <div className="flex">
        <div className="w-1/3 rounded-lg border px-3">
          <h1 className="mt-4 text-2xl font-semibold text-gray-400">Driver</h1>
          <div className="flex w-full pb-1">
            <img src="/public/imgs/driver.jpg" className="h-60 w-1/3" />
            <ul className="ml-10 w-2/3">
              {Title_Data.driverTitle.map((obj, idx) => {
                const keyData = Object.keys(obj)[0] // 실제 서버 키
                const valueData = obj[keyData] // 타이틀값
                return (
                  <li key={idx} className="mt-8 flex">
                    <p className="mb-2 w-1/2 font-extrabold ">{valueData}</p>
                    <p className="ml-5">{equipment[keyData]}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="w-2/3 pl-[7rem]">
          <h1 className="mt-4 text-2xl font-semibold text-gray-400">Device</h1>
          <ul className="grid w-full grid-cols-3 gap-3  pb-1">
            {Title_Data.deviceTitle.map((obj, idx) => {
              const keyData = Object.keys(obj)[0]
              const valueData = obj[keyData]
              console.log(toJS(equipment))
              return (
                <li key={idx} className="mt-10">
                  <p className="mb-2 font-extrabold ">{valueData}</p>

                  {/* <p>
                    {equipment.device[0][keyData] &&
                    typeof equipment.device[0][keyData] === 'string'
                      ? equipment.device[0][keyData]
                      : equipment.device[0][keyData].name}
                  </p> */}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default EquipmentInfo

const Title_Data = {
  GeneralTitle: [
    { originalId: 'Serial Number' },
    { plateNumber: 'Platenumber' },
    { company: 'Company' },
    { manufactureDate: 'Manufacture date' },
  ],
  MaintananceTitle: [
    { maintenance_company: 'Company' },
    { maintenance_manager_department: 'Department' },
    { maintenance_manager_name: 'Manager' },
    { maintenance_manager_phone_number: 'Phone number' },
  ],
  driverTitle: [
    { driverCompany: 'Name' },
    { driverLevel: 'level' },
    { driverCompany: 'Driver Company' },
  ],
  deviceTitle: [
    { serialNumber: 'serialNumber' },
    { lastLogTime: 'lastLogTime' },
    { battery: 'battery' },
    { manager: 'Manager' },
    { company: 'Company' },
  ],
}
