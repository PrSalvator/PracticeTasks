import { FileResponse, IFile } from "./model/types";
import { File as FileClass } from "./model/types";
import {uploadFile as UploadFile, deleteFile as DeleteFile} from "./api/fileApi";
import { File } from "./ui/File/File";

export type {FileResponse, IFile}
export {FileClass, UploadFile, DeleteFile, File}