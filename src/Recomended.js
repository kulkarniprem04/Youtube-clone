import React from 'react'
import './Recomended.css'
import VideoCard from "./VideoCard.js"

function Recomended({ darkmode, clicked }) {
    return (
        <div className={`videos ${clicked === true && "videos_clicked"} ${darkmode === true && "darkmode"}`}>
            <h2>Recommended</h2>
            <div className="recommended_content"> 
                <VideoCard
                    darkmode={darkmode}
                    image="https://vignette.wikia.nocookie.net/pewdiepie/images/e/e5/Maxresdefault.jpg/revision/latest/scale-to-width-down/340?cb=20190107233635"
                    Title = "A Funny Montage"
                    ChannelName="PewDiePie"
                    Text="7 Years ago . 87M views"
                    Channelimage="https://lh3.googleusercontent.com/n195oC14_fBrfKVjTYBBCbn-BJHz8-MmemYcDXLZfyQbg-lyHxzUBIJqVvwhptcKCtkDAQ=s68"
                    />
                <VideoCard
                    darkmode={darkmode}
                    image="https://lh3.googleusercontent.com/QKgF8jUu9ZJxlgImTmi1mDas8VII4ENpwmRQ8T23HC9QF8owt4ljAlPw4eqoebudR5krRg=s151"
                    Title = "5 uses for cloud functions | Get to know cloud Firestore"
                    ChannelName="Firebase"
                    Text="3 days ago . 6.6K views"
                    Channelimage="https://yt3.ggpht.com/a/AATXAJy6miqWZBH_MHS3hyOTL5fg_SmYxu5bzt1myibk6w=s176-c-k-c0x00ffffff-no-rj-mo"
                    />
                <VideoCard
                    darkmode={darkmode}
                    image="https://lh3.googleusercontent.com/nWDFZNsXz3satPPHV8rP4IbWEt-8E07QoeiBZJjU1k0ULX7Te0mqE6G2y0AX5RK2mVFK=s151"
                    Title = "React vs Vanilla Javascript | Learn React for beginers Part 1"
                    ChannelName="Dev Ed"
                    Text="2 days ago . 14K views"
                    Channelimage="https://yt3.ggpht.com/a/AATXAJzj9Wp5NIzuIcB3DhQ5jgunW5b98DCWGeSv2TZptQ=s176-c-k-c0x00ffffff-no-rj-mo"
                    />
                <VideoCard
                    darkmode={darkmode}
                    image="https://lh3.googleusercontent.com/c_9k50CG2Z-MBbUlsk3OY6p4OPvx3qsWcBa2poaLeK1_FxT2awJ1LyRgiASeZbJLEqri=s151"
                    Title = "BUILD REAL MUSCLE AT HOME (NO GYM NEEDED)"
                    ChannelName="Simeon Panda"
                    Text="1 year ago . 5.8M views"
                    Channelimage="https://yt3.ggpht.com/a/AATXAJyOHCIHjnzvghOK9FkfFU2xchaFo9978vfeFju25g=s176-c-k-c0x00ffffff-no-rj-mo"
                    />
                <VideoCard
                    darkmode={darkmode}
                    image="https://vignette.wikia.nocookie.net/pewdiepie/images/e/e5/Maxresdefault.jpg/revision/latest/scale-to-width-down/340?cb=20190107233635"
                    Title = "A Funny Montage"
                    ChannelName="PewDiePie"
                    Text="7 Years ago . 87M views"
                    Channelimage="https://lh3.googleusercontent.com/n195oC14_fBrfKVjTYBBCbn-BJHz8-MmemYcDXLZfyQbg-lyHxzUBIJqVvwhptcKCtkDAQ=s68"
                    />
                <VideoCard
                    darkmode={darkmode}
                    image="https://lh3.googleusercontent.com/2VxB-DBIqWS8zLb0w0Ol7T2s7JCVY3uaUaCzghYKAw-i7i93PEVz45SLWPz90QGFWkZRAA=s151"
                    Title = "5 uses for cloud functions | Get to know cloud Firestore"
                    ChannelName="Firebase"
                    Text="3 days ago . 6.6K views"
                    Channelimage="https://yt3.ggpht.com/a/AATXAJy6miqWZBH_MHS3hyOTL5fg_SmYxu5bzt1myibk6w=s176-c-k-c0x00ffffff-no-rj-mo"
                    />
                <VideoCard
                    darkmode={darkmode}
                    image="https://lh3.googleusercontent.com/nWDFZNsXz3satPPHV8rP4IbWEt-8E07QoeiBZJjU1k0ULX7Te0mqE6G2y0AX5RK2mVFK=s151"
                    Title = "React vs Vanilla Javascript | Learn React for beginers Part 1"
                    ChannelName="Dev Ed"
                    Text="2 days ago . 14K views"
                    Channelimage="https://yt3.ggpht.com/a/AATXAJzj9Wp5NIzuIcB3DhQ5jgunW5b98DCWGeSv2TZptQ=s176-c-k-c0x00ffffff-no-rj-mo"
                    />
                <VideoCard
                    darkmode={darkmode}
                    image="https://lh3.googleusercontent.com/c_9k50CG2Z-MBbUlsk3OY6p4OPvx3qsWcBa2poaLeK1_FxT2awJ1LyRgiASeZbJLEqri=s151"
                    Title = "BUILD REAL MUSCLE AT HOME (NO GYM NEEDED)"
                    ChannelName="Simeon Panda"
                    Text="1 year ago . 5.8M views"
                    Channelimage="https://yt3.ggpht.com/a/AATXAJyOHCIHjnzvghOK9FkfFU2xchaFo9978vfeFju25g=s176-c-k-c0x00ffffff-no-rj-mo"
                    />
            </div>
        
        </div>
    )
}

export default Recomended
