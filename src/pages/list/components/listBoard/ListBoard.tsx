import axios from 'axios'
import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import React, { useState } from 'react'

import { EQUIPMENT_LIST_ADDRESS } from '../../../../config'
import { useToggle } from '../../../../hooks/useHandleToggle'
import useStore from '../../../../useStore'
import Pagination from '../pagination/Pagination'

type Props = {
  pathName: string
  isLoading: boolean
}

const ListBoard = observer(({ pathName, isLoading }: Props) => {
  const { usersInfo, listDatas } = useStore()
  const { isEquipmentControl } = usersInfo
  const { equipmentListData, deviceListData, adminHistoryListData } = listDatas

  const renderData = {
    equipmentData: toJS(equipmentListData),
    deviceData: toJS(deviceListData),
    adminHistoryData: toJS(adminHistoryListData),
  }

  const { equipmentData, deviceData, adminHistoryData } = renderData

  const pathCheckerOptionData: any = () => {
    switch (pathName) {
      case 'equipmentList':
        return equipmentData
      case 'deviceList':
        return deviceData
      case 'adminHistory':
        return adminHistoryData
    }
  }

  const [isModalToggle, handleModalToggled] = useToggle(false)

  // 전역적 모달이 생성되면 거기에 연결
  const requestToServerDeleteId = async () => {
    try {
      const queryAddress = `${EQUIPMENT_LIST_ADDRESS}equipment/list?${checkedValue.join('&')}`
      const response = await axios.delete(queryAddress)
      if (response.status === 204) {
        alert(response)
        // message 찾기
      }
    } catch (err) {
      alert(err)
    }
  }

  // pagination
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const offset = (page - 1) * limit

  // checkBox Toggle
  const [isChecked, setIsChecked] = useState(false)
  const [checkedItems, setCheckedItems] = useState(new Set())

  const checkedValue = Array.from(checkedItems)

  const checkedItemHandler = (id: string, isChecked: boolean) => {
    if (isChecked) {
      checkedItems.add('id=' + id)
      setCheckedItems(checkedItems)
    } else if (!isChecked && checkedItems.has('id=' + id)) {
      checkedItems.delete('id=' + id)
      setCheckedItems(checkedItems)
    }
  }

  const checkHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event
    setIsChecked(!isChecked)
    checkedItemHandler(target.value, target.checked)
  }

  const authorityChecker = () => {
    if (checkedValue.length === 0) {
      alert('None selected')
    } else {
      handleModalToggled
    }
  }

  if (isLoading) return <div>Loading...</div>

  return (
    <>
<<<<<<< HEAD
      <h2 className="mb-2 text-2xl font-semibold text-black">{`Search Equipment(${
=======
      <h2 className="mb-2 text-2xl font-semibold text-black">{`Search ${pathName.slice(0, -4)}(${
>>>>>>> 456bf61 (FIX: 경로에 따라 리스트가 보이도록)
        pathCheckerOptionData().results.length
      }EA)`}</h2>
      <table className="mb-8 table-auto border-collapse">
        <thead>
          <tr>
            <th className="w-72 border-2 px-14 py-2">Company</th>
            <th className="w-72 border-2 px-14 py-2">Equipment type</th>
            <th className="w-72 border-2 px-14 py-2">Device status</th>
            <th className="w-72 border-2 px-14 py-2">Power</th>
            <th className="w-72 border-2 px-14 py-2">Original number</th>
            <th className="w-72 border-2 px-14 py-2">Driver name</th>
          </tr>
        </thead>
        {pathCheckerOptionData()
          .results.slice(offset, offset + limit)
          .map((data: any, idx: number) => (
            <tbody className="border" key={idx}>
              <tr>
                <td className="relative py-1.5 text-center">
                  {data.company}
                  {isEquipmentControl && (
                    <input
                      onChange={checkHandler}
                      value={data.id}
                      type="checkbox"
                      className="absolute left-1/2 top-1/2 -translate-x-20 -translate-y-1/2"
                    />
                  )}
                </td>
                {pathName === 'equipmentList' && (
                  <>
                    <td className="py-1.5 text-center">{data.equipmentType}</td>
                    <td className="py-1.5 text-center">{data.device[0]?.status}</td>
                    <td className="py-1.5 text-center">{data.isPower}</td>
                    <td className="py-1.5 text-center">{data.originalId}</td>
                    <td className="py-1.5 text-center">{data.driver[0]?.name}</td>
                  </>
                )}
                {pathName === 'deviceList' && (
                  <>
                    <td className="py-1.5 text-center">{data.company}</td>
                    <td className="py-1.5 text-center">
                      {data.matchedEquipment[0]?.matchedEquipmentId}
                    </td>
                    <td className="py-1.5 text-center">{data.serialNumber}</td>
                    <td className="py-1.5 text-center">{data.deviceCategory}</td>
                    <td className="py-1.5 text-center">
                      {data.matchedEquipment[0]?.matchedEquipmentCategory}
                    </td>
                  </>
                )}
              </tr>
            </tbody>
          ))}
      </table>
      <div className="relative flex justify-center">
        {isEquipmentControl && (
          <button
            onClick={authorityChecker}
            className="absolute left-0 rounded bg-primary px-20 py-1 text-bgPaper"
          >
            Delete
          </button>
        )}
        <Pagination
          total={pathCheckerOptionData().results.length}
          limit={limit}
          page={page}
          setPage={setPage}
          setLimit={setLimit}
        />
      </div>
    </>
  )
})

export default ListBoard
