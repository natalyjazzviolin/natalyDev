import React from "react"
import { Link } from "gatsby"
import Button from "../button"


const BlogSection = () => {
    return (
        <div class="flex flex-wrap h-screen/75 justify-evenly rounded-lg w-full overflow-hidden">
            <div class="m-2 md:-m-2 border max-h-35 md:max-h-3/4 w-full md:w-screen/27 grid grid-cols-3 md:grid-rows-3 bg-gray-800">
                <h2 class=" md:row-span-1 md:col-span-3 bg-white w-full">hello</h2>
                <p class="md:row-start-2 md:col-span-3 bg-gray-300"></p>
                <div class="md:row-start-3 md:col-span-3 bg-white md:flex md:justify-between">
                    <Link class="mt-10"><Button>Link</Button></Link>
                    <Link class="mt-10"><Button>Link</Button></Link>
                </div>
            </div>
            <div class="border max-h-35 md:max-h-full w-full md:w-screen/27 grid grid-cols-3 md:grid-rows-3 bg-gray-800">
                <h2 class="md:row-span-1 md:col-span-3 bg-white w-full">hello</h2>
                <p class="md:row-start-2 md:col-span-3 bg-gray-300"></p>
                <div class="md:row-start-3 md:col-span-3 w-full">
                    <Link class="inline-block"><Button>Link</Button></Link>
                    <Link class="inline-block"><Button>Link</Button></Link>
                </div>
            </div>
            <div class="border max-h-35 md:max-h-full w-full md:w-screen/27 grid grid-cols-3 md:grid-rows-3 bg-gray-800">
                <h2 class="md:row-span-1 md:col-span-3 bg-white w-full">hello</h2>
                <p class="md:row-start-2 md:col-span-3 bg-gray-300"></p>
                <div class="md:row-start-3 md:col-span-3 w-full">
                    <Link class="inline-block"><Button>Link</Button></Link>
                    <Link class="inline-block"><Button>Link</Button></Link>
                </div>
            </div>
        </div>
    )
}

export default BlogSection;