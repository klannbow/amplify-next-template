"use client"
import React, { useState } from "react"
import ReactPlayer from "react-player"

export default function VideoPlayer() {
    const defaultUrl = 'https://www.youtube.com/watch?v=LXb3EKWsInQ'

    // 入力欄の文字列
    const [inputValue, setInputValue] = useState(defaultUrl)
    const inputChange = (e: { target: { value: React.SetStateAction<string> } }) => {
        setInputValue(e.target.value)
    }
    // 再生するURL
    const [url, seturl] = useState(defaultUrl)
    const urlChange = () => {
        seturl(inputValue)
    }
    return (
        <div>
            <input type="text" placeholder="Enter video url" defaultValue={defaultUrl} onChange={inputChange} />
            <button onClick={urlChange}>Change Video</button>
            <ReactPlayer
                width="500px"
                height="400px"
                url={url}
                controls={true}
                // light is usefull incase of dark mode
                light={false}
                // picture in picture
                pip={true}
            />
            <source src={url} />
        </div>
    )
}