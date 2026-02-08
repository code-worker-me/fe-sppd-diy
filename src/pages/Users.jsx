import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IoIosAdd } from "react-icons/io";
import { CiTrash, CiSaveDown2 } from "react-icons/ci";
import { MdModeEditOutline } from "react-icons/md";

export default function Users() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex px-6 gap-4 flex-col justify-between items-baseline mb-6">
        <div>
          <h1 className="text-2xl font-bold">User Management</h1>
          <p className="text-gray-500 text-sm mt-1">
            Kelola data pengguna sistem
          </p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="self-end mr-6" variant="outline">
              <IoIosAdd /> Add User
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Menambah Data User</DialogTitle>
              <DialogDescription>
                Isi data dibawah ini dengan lengkap.
              </DialogDescription>
            </DialogHeader>

            <form className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="nip">NIP</Label>
                <Input id="nip" name="nip" placeholder="198001012..." />
              </div>

              <div className="space-y-2">
                <Label htmlFor="nama">Nama</Label>
                <Input id="nama" name="nama" placeholder="Pak Gito" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bagian">Bagian</Label>
                <Input id="bagian" name="bagian" placeholder="Administrasi" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="pangkat">Pangkat</Label>
                <Input id="pangkat" name="pangkat" placeholder="Staff" />
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <Button type="submit"><CiSaveDown2 /> Simpan</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        <Table>
          <TableCaption>Daftar pengguna terdaftar dalam sistem.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-25">NIP</TableHead>
              <TableHead>Nama</TableHead>
              <TableHead>Bagian</TableHead>
              <TableHead>Pangkat</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">198001012345</TableCell>
              <TableCell>Husein</TableCell>
              <TableCell>Staff Administrasi</TableCell>
              <TableCell>Bintang 2</TableCell>
              <TableCell className="text-center">
                <div className="flex justify-center gap-2">
                  <Button variant="ghost" size="sm">
                    <MdModeEditOutline /> Edit
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-600 hover:text-red-700"
                  >
                    Delete <CiTrash />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
