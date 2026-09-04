import { useEffect, useState } from "react";
import { discordInviteId } from "../data";

interface DiscordMemberCountState {
  count: number | null;
  loading: boolean;
  error: boolean;
}

/**
 * Fetches a live, approximate member count for the AMN Discord server via
 * Discord's public invite endpoint (the same one used by Discord's own
 * embeds — no bot token required). Returns null for `count` while loading
 * or if the request fails, so callers can fall back to a static value.
 */
export function useDiscordMemberCount(): DiscordMemberCountState {
  const [state, setState] = useState<DiscordMemberCountState>({
    count: null,
    loading: true,
    error: false,
  });

  useEffect(() => {
    let cancelled = false;

    async function fetchCount() {
      try {
        const res = await fetch(
          `https://discord.com/api/v10/invites/${discordInviteId}?with_counts=true`
        );
        if (!res.ok) throw new Error("Discord invite request failed");
        const data = await res.json();
        if (!cancelled) {
          setState({
            count:
              typeof data.approximate_member_count === "number"
                ? data.approximate_member_count
                : null,
            loading: false,
            error: false,
          });
        }
      } catch {
        if (!cancelled) {
          setState({ count: null, loading: false, error: true });
        }
      }
    }

    fetchCount();
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}