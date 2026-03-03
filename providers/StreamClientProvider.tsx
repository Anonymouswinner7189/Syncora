"use client";

import { tokenProvider } from "@/actions/stream.actions";
import Loader from "@/components/Loader";
import { useUser } from "@clerk/nextjs";
import {
  StreamVideo,
  StreamVideoClient,
  User,
} from "@stream-io/video-react-sdk";
import { use, useEffect, useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({ children }: { children: React.ReactNode }) => {
  const [videoClient, setvideoClient] = useState<StreamVideoClient>();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    const initClient = async () => {
      if (!isLoaded || !user) return;
      if (!apiKey) throw new Error("Stream API key missing");
      const streamUser: User = {
        id: user?.id,
        name: user?.username || user?.id,
        image: user?.imageUrl,
      };
      const token = await tokenProvider();
      const client = new StreamVideoClient({
        apiKey,
        user: streamUser,
        token,
      });
      setvideoClient(client);
    };
    initClient();
  }, [user, isLoaded]);

  if (!videoClient) return <Loader />;

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;
