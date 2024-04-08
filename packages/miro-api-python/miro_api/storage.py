from dataclasses import dataclass
from abc import ABC, abstractmethod
import datetime

from typing import Optional


@dataclass
class State:
    """
    A dataclass containing access token, refresh token and access token expiration time
    """

    access_token: str
    refresh_token: Optional[str]
    token_expires_at: Optional[datetime.datetime]


class Storage(ABC):
    """Abstract class that's used by the stateful client to set and get State."""

    @abstractmethod
    def set(self, state: Optional[State]) -> None:
        pass

    @abstractmethod
    def get(self) -> Optional[State]:
        pass


class InMemoryStorage(Storage):
    """In memory implementation of the `Storage`. Not recommended to be used in production."""

    def __init__(self):
        self.data: Optional[State] = None

    def set(self, state: Optional[State]) -> None:
        self.data = state

    def get(self) -> Optional[State]:
        return self.data
