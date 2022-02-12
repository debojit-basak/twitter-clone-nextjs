import {useState, useRef} from "react"
import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

function Input() {
  const [input,setInput] = useState("");
  const[selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);
  const [showEmojis, setShowEmojis] = useState(false);

  const addImageToPost = () => {

  }
  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };
  return (
    <div className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-screen text-white`}>
        <img src="https://cdn4.vectorstock.com/i/1000x1000/04/43/twitter-logo-icon-vector-27990443.jpg" alt="" className="h-11 w-11 rounded-full cursor-pointer"/>
        <div className="w-full divide-y divide-gray-700">
            <div className={``}>
                <textarea
                 
                onChang={(e) => setInput(e.target.value)}
                //value={input}
                 className="bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-50 tracking-wide w-full min-h-[50px]" 
                 placeholder="What's happening"
                 rows="2">

                </textarea>
                {selectedFile &&(
                  <div className="relative">
                  <div
                  onClick={()=> setSelectedFile(null)}
                   className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-2 cursor-pointer">
                      <XIcon className="text-white h-5"/>
                  </div>
                  <img src={selectedFile} className="rounded-2xl max-h-80 object-contain" alt="image" />
                </div>
                )}
            </div>
            {/* <div>Hello</div> */}
            <div className="flex items-center justify-between pt-2.5">
              <div className="flex items-center">
                <div className="icon" onClick={() => filePickerRef.current.click()}>
                  <PhotographIcon className="h-[22px] text-[#1d9bf0]"/>
                  <input type="file" hidden onChang={addImageToPost} ref={filePickerRef} />
                </div>
                <div className="icon rotate-90">
                <ChartBarIcon className="text-[#1d9bf0] h-[22px]" />
              </div>

              <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
                <EmojiHappyIcon className="text-[#1d9bf0] h-[22px]" />
              </div>

              <div className="icon">
                <CalendarIcon className="text-[#1d9bf0] h-[22px]" />
              </div>

              {showEmojis && (
                <Picker
                  onSelect={addEmoji}
                  style={{
                    position: "absolute",
                    marginTop: "465px",
                    marginLeft: -40,
                    maxWidth: "320px",
                    borderRadius: "20px",
                  }}
                  theme="dark"
                />
              )}

              </div>

            </div>
        </div>
    </div>
  )
}

export default Input