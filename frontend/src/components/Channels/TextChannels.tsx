import React, { useEffect, useState } from "react"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from "@chakra-ui/react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { useAppDispatch } from "../../store/store"
import { setSelectedChannel } from "../../store/features/diskord/diskordSlice"
import { getChannelByServer } from "../../../api/diskordApi"

// const socket = io("http://localhost:3000")

const TextChannels = () => {
  const dispatch: useAppDispatch = useDispatch()
  const navigate = useNavigate()
  const [channelsList, setChannelsList] = useState([])
  interface dState {
    diskord: {
      activeServer: string
      activeChannel: string
    }
  }

  const currentState = useSelector(
    (state: dState) => state.diskord
  )

  const serverId = currentState.activeServer

  const socket = useSelector(
    (state: any) => state.diskord.socket
  )

  const getChannels = async (sId: string) => {
    const channels = await getChannelByServer(sId)
    setChannelsList(channels)
  }

  useEffect(() => {
    getChannels(serverId)
  }, [serverId])

  function handleClickChannel(id: number) {
    dispatch(setSelectedChannel(id))
    socket.emit("join-channel", id)
    navigate(`/diskord/servers/${serverId}/channels/${id}`)
  }

  return (
    <Accordion
      defaultIndex={[0]}
      allowMultiple
      className="pt-3"
    >
      {channelsList?.map((channel: any, i) => (
        <AccordionItem borderColor="#3f4147" key={i}>
          <h2
            className={`${
              channel.category ? "block" : "hidden"
            }`}
          >
            <AccordionButton
              border="none"
              _expanded={{
                bg: "#393a3b",
                color: "white"
              }}
            >
              <Box
                as="span"
                flex="1"
                textAlign="left"
                color="gray.400"
                className=" hover:text-white"
                fontSize="sm"
              >
                {channel?.category}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div>
              {channel.channels.map(
                (channel: any, i: any) => (
                  <div
                    key={i}
                    className="flex w-full h-10 bg-[#494a4d] my-2 cursor-pointer rounded-lg hover:text-white hover:bg-[#393a3b]"
                    onClick={() =>
                      handleClickChannel(channel.channelId)
                    }
                  >
                    <span className="my-auto p-2 text-md text-[#919395] hover:text-white cursor-pointer">
                      {channel?.channelName}
                    </span>
                  </div>
                )
              )}
            </div>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default TextChannels
