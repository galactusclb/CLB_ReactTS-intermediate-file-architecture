import React, { ReactNode } from "react"
import { RouteProps } from "react-router-dom"

export type RouteType = {
    path?: string,
    component?: React.FC,
    redirectTo?: string
}
// component?: React.FC | undefined | RouteProps